var React = require("react")

var Add = React.createClass({
    onAdd: function(e){

        e.preventDefault()
        var new2do = this.refs.add.value
        console.log(this.props.handAdd2do)

        
        
      if (new2do.length>0){ 
          this.refs.add.value = ''
          this.props.handAdd2do(new2do)
      }else{
          this.refs.add.focus()
      }
    },
    

    render: function(){
            this.onAdd = this.onAdd.bind(this)

        return (
            <div>
                <form onSubmit={this.onAdd.bind(this)}>
                    <input type='text' ref='add' placeholder="what else? r u forgetting s.th?" /> 
                    <button className='button blue hollow expanded'> add! </button>
                </form>
            </div>
            )
    }
})

module.exports = Add