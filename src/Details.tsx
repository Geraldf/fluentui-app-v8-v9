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

export const Details: React.FunctionComponent = () => {
  const styles = useStyles();

  return (
    <div className={styles.details}>
      <div className={styles.content}>
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
          <div className={styles.instructions}>
            <Input placeholder="Shipping memo" />
            <Checkbox label="International Shipping" />
          </div>
        </div>
        <Button className={styles.shipAction} appearance="primary">
          Ship Order
        </Button>
      </div>
      <div className={styles.output}>This is the details output pane</div>
    </div>
  );
};
