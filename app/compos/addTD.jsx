var React = require("react")

var Add2do = React.createClass({
    onAdd2do: function (e){

        e.preventDefault()
        var new2do = this.refs.add.value

      if (new2do.length>0){ 
          this.refs.add.value = ''
          this.props.handAdd2do(new2do)
      }else{
          this.refs.add.focus()
      }
    },
    

    render: function(){
            //this.onAdd = this.onAdd.bind(this)

        return (
            <div className='container__footer'>
                <form onSubmit={this.onAdd2do}>
                    <input type='text' ref='add' placeholder="What's on your hit list?" /> 
                    <button className='button blue expanded'> add! </button>
                </form>
            </div>
            )
    }
})

module.exports = Add2do