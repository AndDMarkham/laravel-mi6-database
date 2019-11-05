import React from 'react';

export default class PersonList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            people: []
        }
    }

    componentDidMount() {
        fetch('/api/person', {
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.token

            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                people: data
            })
        });
    }

    render() {
        return (
            <>
                <h1>Person list</h1>
                
                <div className="people_list">
                    {
                        this.state.people.map(( person, key ) => (
                            <div key={key}>
                                <img src={person.image.path} alt="" className="person_photo" />
                                <p>{person.name}</p>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}