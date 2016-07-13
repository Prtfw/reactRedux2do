var React = require("react")

var Search = React.createClass({
    handSearch: function(){ //on change does not get passed event
    console.log('search change')
        var shocomp = this.refs.shocomp.checked
        var searchtxt = this.refs.search.value
        this.props.onSearch(shocomp, searchtxt)
    },
    render: function(){
        return (
            <div className='container__header'>
                <div>
                    <input onChange={this.handSearch} type='search' ref='search' placeholder='Search todos' />
                </div>
                <div>
                    <label> <input type='checkbox' ref='shocomp' onChange= {this.handSearch} /> Show Completed Todos? </label>

                </div>
            </div>
            )
    }
    
})

module.exports = Search