const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="Testclient"/>
            <Tweet 
                name="Test Client"
                username="test_client"
                date="8/27/2023"
                message="This is a very smooth test message"
            />
            <Tweet 
                    name="Rhee Akt"
                    username="rheeact"
                    date="8/19/2023"
                    message="I have to say... I'm enjoying this new topic"
                />
            <Tweet 
                    name="Revolution"
                    username="_revolution_"
                    date="7/26/2023"
                    message="Something interesting is happening in the Sahel"
                />
            <Person
                    name="Longername"
                    age={28}
                    hobbies={["hiking", "shooting", "marathon", "weight-lifting"]}
                />
            <Person
                        name="Solo"
                        age={24}
                        hobbies={["coding", "gaming", "weight-lifting"]}
                    />
            <Person
                        name="Eater"
                        age={17}
                        hobbies={["eating"]}
                    />
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"));