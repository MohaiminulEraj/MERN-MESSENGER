import React from 'react';
import styled from '@emotion/styled';
import MessagesHeader from './MessagesHeader';
import { connect } from 'react-redux';
import DUMMY_MESSAGES from './DUMMY_MESSAGES';
import Message from './Message';
import DateSeparator from './DateSeparator';

const MainContainer = styled.div({
    height: "calc(100% - 60px)",
    overFlow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

const convertedDate = (date, format) => {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    };
    return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};

const Messages = ({ chosenChatDetails, messages }) => {
    console.log('messages', messages);
    return (
        <MainContainer>
            <MessagesHeader name={chosenChatDetails?.name} />
            {messages.map((message, index) => {

                const sameAuthor = index > 0 && messages[index].author._id === messages[index - 1].author._id

                const sameDay = index > 0 && convertedDate(new Date(message.date), "dd/mm/yy") === convertedDate(new Date(messages[index - 1].date), "dd/mm/yy");

                return (
                    <div key={message._id} style={{ width: "97%" }}>
                        {(!sameDay || index === 0) && (
                            <DateSeparator
                                date={convertedDate(
                                    new Date(message.date),
                                    "dd/mm/yy"
                                )}
                            />
                        )}
                        <Message
                            content={message.content}
                            username={message.author.username}
                            sameAuthor={sameAuthor}
                            date={convertedDate(new Date(message.date), "dd/mm/yy")}
                            sameDay={sameDay}
                        />
                    </div>
                );
            })};
        </MainContainer>
    )
};

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat,
    };
};

export default connect(mapStoreStateToProps)(Messages);