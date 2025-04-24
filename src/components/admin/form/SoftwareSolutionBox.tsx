import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

interface SoftwareSolutionBoxProps {
  namePrefix: string;
  fields: any[];
  add: () => void;
  remove: (name: number) => void;
}

const SoftwareSolutionBox: React.FC<SoftwareSolutionBoxProps> = ({
  namePrefix,
  fields,
  add,
  remove,
}) => {
  return (
    <>
      {fields.map(({ key, fieldKey, name }) => (
        <div key={key} className="box flex justify-center items-center">
          <Form.Item
            label="Text"
            name={[namePrefix, name, "text"]}
            fieldKey={[fieldKey, "text"]}
            rules={[{ required: true, message: "Please enter the text!" }]}
          >
            <Input placeholder="Text for box" />
          </Form.Item>

          <Form.Item
            label="Link"
            name={[namePrefix, name, "link"]}
            fieldKey={[fieldKey, "link"]}
            rules={[{ required: true, message: "Please enter the link!" }]}
          >
            <Input placeholder="Link for box" />
          </Form.Item>

          {fields.length > 1 ? (
            <MinusCircleOutlined
              className="dynamic-delete-button"
              onClick={() => remove(name)} // Sửa lại ở đây
            />
          ) : null}
        </div>
      ))}

      <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
        Add field
      </Button>
    </>
  );
};

export default SoftwareSolutionBox;
