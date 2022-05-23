import React from "react";
import {
  Button,
  Checkbox,
  Input,
  Label,
  makeStyles,
  Radio,
  RadioGroup,
  shorthands,
  Title2,
  tokens,
} from "@fluentui/react-components";
import {
  ComboBox,
  DetailsList,
  DetailsListLayoutMode,
  IComboBoxOption,
  Selection,
} from "@fluentui/react";

const useStyles = makeStyles({
  details: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr auto",
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "center",
    ...shorthands.margin(tokens.spacingHorizontalM),
  },
  section: {
    ...shorthands.margin(tokens.spacingHorizontalM),
  },
  instructions: {
    display: "flex",
    flexDirection: "row",
    "& > :first-child": {
      minWidth: "300px",
    },
    "& > *": {
      ...shorthands.margin(tokens.spacingHorizontalM, 0),
    },
  },
  shipAction: {
    ...shorthands.margin(0, 0, 0, tokens.spacingHorizontalS),
  },
  output: {
    minHeight: "200px",
    ...shorthands.borderTop(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke1
    ),
  },
});

const orderColumns = [
  {
    key: "column1",
    name: "Customer",
    fieldName: "customer",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column2",
    name: "Product",
    fieldName: "product",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column3",
    name: "Quantity",
    fieldName: "quantity",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column4",
    name: "Price",
    fieldName: "price",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
];

type OrderListItem = {
  key: string;
  customer: string;
  product: string;
  quantity: number;
  price: number;
};

const orders: OrderListItem[] = [
  {
    key: "order1",
    customer: "Jim",
    product: "Toothbrush, Green",
    quantity: 3,
    price: 1.12,
  },
  {
    key: "order2",
    customer: "Janet",
    product: "Yarn Gnome with hut, 18 inches",
    quantity: 7,
    price: 15.13,
  },
  {
    key: "order3",
    customer: "Stacy",
    product: "Leather steering wheel cover",
    quantity: 1,
    price: 82.64,
  },
  {
    key: "order4",
    customer: "John",
    product: "Ultimate Stereo Headphones",
    quantity: 1,
    price: 34.52,
  },
  {
    key: "order5",
    customer: "John",
    product: "Mini to 1/4 inch stereo cable adapter",
    quantity: 1,
    price: 3.44,
  },
];

const stateOptions: IComboBoxOption[] = [
  { key: "Alabama", text: "Alabama" },
  { key: "Alaska", text: "Alaska" },
  { key: "Arizona", text: "Arizona" },
  { key: "Arkansas", text: "Arkansas" },
  { key: "California", text: "California" },
  { key: "Colorado", text: "Colorado" },
  { key: "Connecticut", text: "Connecticut" },
  { key: "Delaware", text: "Delaware" },
  { key: "Florida", text: "Florida" },
  { key: "Georgia", text: "Georgia" },
  { key: "Hawaii", text: "Hawaii" },
  { key: "Idaho", text: "Idaho" },
  { key: "IllinoisIndiana", text: "IllinoisIndiana" },
  { key: "Iowa", text: "Iowa" },
  { key: "Kansas", text: "Kansas" },
  { key: "Kentucky", text: "Kentucky" },
  { key: "Louisiana", text: "Louisiana" },
  { key: "Maine", text: "Maine" },
  { key: "Maryland", text: "Maryland" },
  { key: "Massachusetts", text: "Massachusetts" },
  { key: "Michigan", text: "Michigan" },
  { key: "Minnesota", text: "Minnesota" },
  { key: "Mississippi", text: "Mississippi" },
  { key: "Missouri", text: "Missouri" },
  { key: "MontanaNebraska", text: "MontanaNebraska" },
  { key: "Nevada", text: "Nevada" },
  { key: "New", text: "New Hampshire" },
  { key: "New", text: "New Jersey" },
  { key: "New", text: "New Mexico" },
  { key: "New", text: "New York" },
  { key: "North", text: "North Carolina" },
  { key: "North", text: "North Dakota" },
  { key: "Ohio", text: "Ohio" },
  { key: "Oklahoma", text: "Oklahoma" },
  { key: "Oregon", text: "Oregon" },
  { key: "Pennsylvania", text: "Pennsylvania" },
  { key: "Rhode", text: "Rhode Island" },
  { key: "South", text: "South Carolina" },
  { key: "South", text: "South Dakota" },
  { key: "Tennessee", text: "Tennessee" },
  { key: "Texas", text: "Texas" },
  { key: "Utah", text: "Utah" },
  { key: "Vermont", text: "Vermont" },
  { key: "Virginia", text: "Virginia" },
  { key: "Washington", text: "Washington" },
  { key: "West", text: "West Virginia" },
  { key: "Wisconsin", text: "Wisconsin" },
  { key: "Wyoming", text: "Wyoming" },
];

export const Details: React.FunctionComponent = () => {
  const styles = useStyles();

  return (
    <div className={styles.details}>
      <div className={styles.content}>
        <Title2>Pending Orders</Title2>
        <div className={styles.section}>
          <DetailsList
            items={orders}
            columns={orderColumns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
          />
        </div>
        <Title2>Order Shipping</Title2>
        <div className={styles.section}>
          <Label id="CustomerTypeLabel" strong>
            Customer Type
          </Label>
          <RadioGroup aria-labelledby="CustomerTypeLabel">
            <Radio label="Preferred" value="preferred" />
            <Radio label="New" value="new" checked />
            <Radio label="Default" value="default" />
            <Radio label="Problematic" value="problematic " />
          </RadioGroup>
        </div>
        <div className={styles.section}>
          <Label id="Shipping Instructions" strong>
            Shipping Instructions
          </Label>
          <div>
            <Input placeholder="Shipping memo" />
          </div>
        </div>
        <div className={styles.section}>
          <ComboBox label="State" options={stateOptions} />
          <Checkbox label="International Shipping" />
        </div>
        <Button className={styles.shipAction} appearance="primary">
          Ship Order
        </Button>
      </div>
      <div className={styles.output}>This is the details output pane</div>
    </div>
  );
};
