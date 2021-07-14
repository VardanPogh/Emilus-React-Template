import React, { Component } from "react";
import {
  ConfigProvider,
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Popconfirm,
  Table,
  Modal,
  Button,
  Select,
  Transfer,
  Radio
} from "antd";
import enUS from "antd/es/locale/en_US";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("en");

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "filter1",
        value: "filter1"
      }
    ]
  },
  {
    title: "Age",
    dataIndex: "age"
  }
];

class Page extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  render() {
    const info = () => {
      Modal.info({
        title: "some info",
        content: "some info"
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: "some info",
        content: "some info"
      });
    };
    return (
      <div className="locale-components">
        <div className="example mt-3 mb-3">
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
        <div className="example mb-3">
          <Select className="mr-2" showSearch style={{ width: 200 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
          </Select>
          <DatePicker className="mr-2"/>
          <TimePicker className="mr-2" />
          <RangePicker style={{ width: 200 }} />
        </div>
        <div className="example mb-3">
          <Button className="mr-2" type="primary" onClick={this.showModal}>
            Show Modal
          </Button>
          <Button className="mr-2" onClick={info}>Show info</Button>
          <Button className="mr-2" onClick={confirm}>Show confirm</Button>
          <Popconfirm title="Question?">
            <a href="/#">Click to confirm</a>
          </Popconfirm>
        </div>
        <div className="example mb-3">
          <Transfer
            dataSource={[]}
            showSearch
            targetKeys={[]}
            render={item => item.title}
          />
        </div>
        <div
          className="border"
          style={{ width: 319, borderRadius: 4 }}
        >
          <Calendar fullscreen={false} value={moment()} />
        </div>
        <div className="example mb-3">
          <Table dataSource={[]} columns={columns} />
        </div>
        <Modal
          title="Locale Modal"
          visible={this.state.visible}
          onCancel={this.hideModal}
        >
          <p>Locale Modal</p>
        </Modal>
      </div>
    );
  }
}

export class Locale extends Component {
  constructor() {
    super();
    this.state = {
      locale: enUS
    };
  }

  changeLocale = e => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
    if (!localeValue) {
      moment.locale("en");
    } else {
      moment.locale("zh-cn");
    }
  };

  render() {
    const { locale } = this.state;
    return (
      <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group value={locale} onChange={this.changeLocale}>
            <Radio.Button key="en" value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <ConfigProvider locale={locale}>
          <Page
            key={
              locale
                ? locale.locale
                : "en" /* Have to refresh for production environment */
            }
          />
        </ConfigProvider>
      </div>
    );
  }
}

export default Locale;
