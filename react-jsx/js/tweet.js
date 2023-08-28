const Tweet = (props) => {
    return (
        <div class="tweet">
            <div>
                <label class="name">{props.name}</label>
                <a href="#" target="_blank">@{props.username}</a>
                <label class="date">{props.date}</label>
            </div>
            <p class="msg">{props.message}</p>
        </div>
    )
}