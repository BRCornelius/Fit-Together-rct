import React from 'react';
import axios from 'axios';
import UserEventItem from './userEventItem.jsx';
class UserEventList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: props.user,
      games: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  } 
  
  
  componentDidMount(){
    // axios.post('/test')
    // .then((response)=>{console.log(response)}).catch((err)=>{console.log('error')})
    // console.log(this.state.user)
    this.state.user[7].forEach(game => {
      axios.get('/game', {
        params: {
          gameName: game
        }
      })
      .then((response) => {
        // console.log(response);
        this.state.games.push(response);
      })
      .catch((err) => {
        console.error('error')
      })
    });
  }
  
  render() {
    
    return (

  <table className="table">
	  <thead>
		  <tr>
			  <th>
				  Image
			  </th>
					<th>
						Event Name
 				</th>
  			<th>
	  			City
		  	</th>
			  <th>
					Date
  			</th>
			</tr>
 		</thead>
		<tbody>
    {this.state.games.map( el => {
      console.log(el);
      return <UserEventItem game={el} />
    })}
	 		
  	</tbody>
  </table>

  )
}
}

export default UserEventList;