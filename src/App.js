import React, { Component } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Eric',
            unreadCount: 1000,
        };
    }

    render() {
        const { name, unreadCount } = this.state;

        return (
            <div>
                <div>
                    normal:

                    <div>
                        <code>
                            {`<FormattedNumber
                            value={5000}
                        />`}
                        </code>
                    </div>
                    --------
                    <div>
                        <FormattedNumber
                            value={5000}
                        />
                    </div>
                </div>
                <hr/>
                <div>
                    Currency
                    <pre>
                        Mac:
                        - Chrome: OK
                        - Firefox: Error

                        iOS:
                        - Chrome: error
                        - Safari: OK

                        Android:
                        - Nexus 5: OK
                    </pre>

                    <div>
                        <code>
                            {`
                    <FormattedNumber
                        value={5000}
                        style="currency"
                    />`}
                        </code>
                    </div>


                    <div>
                        <FormattedNumber
                            value={5000}
                            style={'currency'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
