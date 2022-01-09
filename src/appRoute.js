import React  from 'react';
import { List, Avatar, Card } from 'antd';
import { Input } from './input';

export default class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        console.log(this.props)
        const setData = this.props.setData;
        const data = [
            {
              key: "value 1"
            },
            {
              key: "value 2"
            },
            {
              key: "value 3",
            }
        ]
        setData(data)
    }
    click_handler = () => {
        const toggleClick = this.props.toggleClick;
        const  clicked = (this.props.clicked || 0) + 1
        toggleClick(clicked)
    }
    render() {
        console.log(this.props);
        return  (
            <div>
                {
            (this.props.data || []).map((value, index) => {
              const v = value;
              v.title = v.key;
              v.key = undefined;
              return v;
            }).map( (value, index) => {
              return (
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                  <p>{value.title}</p>
                </Card>
              )
            } )
          }
          <Input data={5} test={"hello test"} />
            <button onClick={this.click_handler} >
                click
            </button>
            {
                this.props.clicked
            }
            </div>
        )
    }
}