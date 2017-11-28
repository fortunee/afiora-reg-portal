import React, { Component } from 'react';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid admin-dashboard">
                <div class="panel panel-primary">
                    <div class="panel-heading">Merchants</div>
                    <div class="panel-body">
                        <h3>List of signed up merchants</h3>
                        <table class="table">
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                            <tr>
                                <td>Name data</td>
                                <td>Location Data</td>
                                <td>Email Data</td>
                                <td>Phone Data</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;