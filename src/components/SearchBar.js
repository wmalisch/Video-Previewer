import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = { term: '' }
    }

    handleChange = (event) =>{
        this.setState({term: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render(){
        return(
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type='text'
                            placeholder='Type video search here...'
                            value={this.state.term}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar
