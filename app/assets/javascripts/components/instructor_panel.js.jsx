var InstructorPanel = React.createClass({
  buttonBaseClass: "ui bottom padded fluid button ",
  getQueuePopButtonData: function () {
    return {
      title: 'Queue Pop',
      className: this.buttonBaseClass + "huge primary " + (this.props.requests.length <= 0 ? "disabled" : ""),
      action: this.props.queuePop,
    };
  },
  getInstructorToggleButtonData: function () {
    return {
      title: this.props.online ?  'Go Offline' : 'Go Online',
      className: this.buttonBaseClass + "large",
      action: this.props.setInstructorStatus.bind(null, !this.props.online),
    };
  },
  getTakeQueueOfflineButtonData: function () {
    var instructorCount = this.props.instructors.length;

    return {
      title: 'Take All Instructors Offline',
      className: this.buttonBaseClass + "large " + (instructorCount <= 0 ? "disabled" : ""),
      action: this.props.takeQueueOffline,
    };
  },
  render: function () {
    return (
      <div className={this.props.segmentClass}>
        <h4 className="ui header">Instructor Queue Management</h4>

        <Action data={this.getQueuePopButtonData()} />
        <Action data={this.getInstructorToggleButtonData()} />
        <Action data={this.getTakeQueueOfflineButtonData()} />

      </div>
    );
  },
});