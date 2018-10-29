import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import ReactGA from "react-ga";

export class AnalyticsWrapper extends Component {
  constructor(props) {
    super(props)
    const weShouldTrackPage = process.env.NODE_ENV !== 'development';
    if (weShouldTrackPage) {
      ReactGA.initialize('UA-128299728-1');
      ReactGA.pageview(this.props.location.pathname + this.props.location.search);
    }
  }

  componentDidUpdate(prevProps) {
    const pageHasChanged = this.props.location !== prevProps.location;
    const weShouldTrackPage = process.env.NODE_ENV !== 'development';
    if (weShouldTrackPage && pageHasChanged) {
      const page = this.props.location.pathname + this.props.location.search;
      ReactGA.pageview(page);
    }
  }

  render() {
    return this.props.children
  }
}


export default withRouter(AnalyticsWrapper)
