import { Checkbox, Form, Input, Select, FormInstance } from "antd"
import ProjectsForm from "./ProjectsForm"
import { selectIndustries } from "../../constants"
import { formatDateInProjectsToDatePicker } from "../../utils"
import { Customer } from "../../types"

import styles from "./CustomerForm.module.css"

interface CustomerFormProps {
  customer: Customer
  form: FormInstance<any>
  errorMessage: string
}

export default function CustomerForm({
  customer,
  form,
  errorMessage,
}: CustomerFormProps) {
  const formattedProjects = formatDateInProjectsToDatePicker(customer.projects)

  return (
    <Form layout="vertical" form={form} data-testid="customers-form">
      <Form.Item
        valuePropName="checked"
        initialValue={customer.isActive ? true : false}
        name="isActive"
      >
        <Checkbox data-testid="active-field">Active customer</Checkbox>
      </Form.Item>
      <Form.Item
        initialValue={customer.company}
        label="Company"
        name="company"
        rules={[{ required: true, message: "Missing company" }]}
      >
        <Input data-testid="company-field" />
      </Form.Item>
      <Form.Item
        initialValue={customer.industry}
        name="industry"
        label="Industry"
        rules={[{ required: true, message: "Missing industry" }]}
      >
        <Select data-testid="industry-field">
          {selectIndustries.map(({ label, key }) => (
            <Select.Option key={key} value={key}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item initialValue={customer.about} label="About" name="about">
        <Input.TextArea data-testid="about-field" />
      </Form.Item>
      <ProjectsForm projects={formattedProjects} />
      <span className={styles.errorMessage}>{errorMessage}</span>
    </Form>
  )
}
