import React from "react";
import UserInput from "./UserInput";
import { View, Button, Text, Vibration  } from "react-native";

Math.formatSeconds = num => (num <= 9 ? "0" : null) + num;
export default class App extends React.Component {
  workTime = 1500;
  breakTime = 300;

  state = {
    time: this.workTime,
    counting: false,
    title: "Work Time",
    wts: 0,
    wtm: 0,
    bts: 0,
    btm: 0,
  };
  componentDidMount = () => this.start();
  componentDidUpdate = () => {
    if (this.state.time < 0) {
      clearInterval(this.working);
      Vibration.vibrate([10, 500, 500])
      this.timeSwitch();
      this.start();
    }
  };
  start = () => {
    this.working = setInterval(() => {
      0;
      this.setState({
        time: this.state.time - 1,
        counting: true,
      });
    }, 1000);
  };

  timeSwitch = () =>
    this.state.title === "Work Time"
      ? this.setState({
          time: this.breakTime,
          title: "Break Time",
        })
      : this.setState({
          time: this.workTime,
          title: "Work Time",
        });
  pause = () => {
    this.setState({ counting: false });
    clearInterval(this.working);
  };

  reset = () =>
    this.setState({ time: this.resetSwitch() } /* () => this.pause() */);

  resetSwitch = () =>
    this.state.title === "Work Time" ? this.workTime : this.breakTime;

  // In order to avoid mistakes, I'll let the user confirm the inserted work / break time by pressing "reset" for applying changes.
  wtmInput = value => {
    this.setState(
      { wtm: value },
      () => (this.workTime = Number(this.state.wts) + Number(this.state.wtm))
    );
  };

  wtsInput = value => {
    this.setState(
      { wts: value },
      () =>
        (this.workTime = Number(this.state.wts) + Number(this.state.wtm) * 60)
    );
  };

  btmInput = value => {
    this.setState(
      { btm: value },
      () => (this.breakTime = Number(this.state.bts) + Number(this.state.btm))
    );
  };

  btsInput = value => {
    this.setState(
      { bts: value },
      () =>
        (this.breakTime = Number(this.state.bts) + Number(this.state.btm) * 60)
    );
  };

  render() {
    return (
      <React.Fragment>
        <View
          style={{
            backgroundColor: "silver",
            border: "1px solid grey",
            borderRadius: 10,
            width: 350,
            height: 500,
            margin: 30,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 50 }}>
            {this.state.title}
          </Text>
          <Text>
            {Math.floor(this.state.time / 60)}:
            {Math.formatSeconds(this.state.time % 60)}
          </Text>
          {this.state.counting
            ? <Button onPress={this.pause} title="Pause" />
            : <Button onPress={this.start} title="Start" />}
          <Button onPress={this.reset} title="Reset" />
          <UserInput
            workTime={this.workTime}
            breakTime={this.breakTime}
            wtm={this.wtmInput}
            wts={this.wtsInput}
            btm={this.btmInput}
            bts={this.btsInput}
          />
        </View>
      </React.Fragment>
    );
  }
}
