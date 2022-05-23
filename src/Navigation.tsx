import React, { ReactNode } from "react";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { List } from "@fluentui/react";

const useStyles = makeStyles({
  navigation: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr",
    height: "100%",
  },
  header: {
    fontSize: "22px",
  },
  list: {
  },
  customer: {
    ...shorthands.padding("15px", "5px"),
  },
});

type CustomerListItem = {
  key: string;
  name: string;
};

const items: CustomerListItem[] = [
  {
    key: "1",
    name: "Bill",
  },
  {
    key: "2",
    name: "John",
  },
  {
    key: "3",
    name: "Stacy",
  },
  {
    key: "4",
    name: "Henry",
  },
  {
    key: "5",
    name: "Janet",
  },
];

export const Navigation: React.FunctionComponent = () => {
  const styles = useStyles();

  const onRenderCustomer = (item?: CustomerListItem): ReactNode => {
    if (item) {
    // v9 styles can be used when rendering item in v8 render props callbacks
      return (
        <div className={styles.customer} key={item.key}>
          {item.name}
        </div>
      );
    }

    return null;
  };

  // This uses the v8 List component
  return (
    <div className={styles.navigation}>
      <div className={styles.header}>Customers</div>
      <div className={styles.list}>
        <List items={items} onRenderCell={onRenderCustomer} />
      </div>
    </div>
  );
};
