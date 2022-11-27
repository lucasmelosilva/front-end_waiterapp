import { Order } from "../../types/Order";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({ title, icon, orders }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(({ _id, products, table }) => {
            return (
              <button key={_id} type="button">
                <strong>Mesa {table}</strong>
                <span>{products.length} items</span>
              </button>
            );
          })}
        </OrdersContainer>
      )}
    </Board>
  );
}
