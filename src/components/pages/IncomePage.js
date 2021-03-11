import {
  Container,
  Col,
  Row,
  Form,
  Button,
  Modal,
  Table,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { dummyIncome } from "../../utils/data";

import actionSuccess from "../../assets/svg/action-success.svg";
import actionCancel from "../../assets/svg/action-cancel.svg";

function IncomePage() {
  const history = useHistory();

  /**
   *
   * Parameters :
   * - 0 for "Cancel"
   * - 1 for "Waiting Approve"
   * - 2 for "On The Way"
   * - 3 for "Success"
   */
  const handleStatus = (status) => {
    switch (status) {
      case 0:
        return <p className="text-danger">Cancel</p>;
        break;
      case 1:
        return <p className="text-warning">Waiting Approve</p>;
        break;
      case 2:
        return <p className="text-info">On The Way</p>;
        break;
      case 3:
        return <p className="text-success">Success</p>;
        break;

      default:
        break;
    }
  };
  const handleAction = (status) => {
    switch (status) {
      case 0:
        return <img src={actionCancel} height="20" alt="cancel action" />;
        break;
      case 1:
        return (
          <div>
            <Button size="sm" variant="danger" className="mr-0 mr-lg-2">
              Cancel
            </Button>
            <Button size="sm" variant="success">
              Approve
            </Button>
          </div>
        );
        break;
      case 2:
        return <img src={actionSuccess} height="20" alt="success action" />;
        break;
      case 3:
        return <img src={actionSuccess} height="20" alt="success action" />;
        break;

      default:
        break;
    }
  };
  return (
    <div className="bg-grey py-5 mt-4">
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <h1 className="heading font-weight-bold">Income Transaction</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="table-responsive-xs">
            <div className="table-responsive">
              <Table
                bordered
                style={{ backgroundColor: "white", borderColor: "#828282" }}
                className="overflow-auto"
              >
                <thead style={{ backgroundColor: "#E5E5E5" }}>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Products Order</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyIncome.map((income, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{income.name}</td>
                      <td>{income.address}</td>
                      <td>{income.products}</td>
                      <td className="text-center">
                        {handleStatus(income.status)}
                      </td>
                      <td className="text-center">
                        {handleAction(income.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IncomePage;
