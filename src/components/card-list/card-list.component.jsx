import { Component } from "react";
import './card-list.styles.css';


class CardList extends Component {
    render() {
        const {monsters} = this.props;
        return (
            <div className="card-list">
                {monsters.map((monster) => (
                    <div className="card-container" key={monster.id}>
                        <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}&size=180x180`}/>
                        <h2>{monster.name}</h2>
                    </div>
                ))}
            </div>
        )
    }
}

export default CardList;