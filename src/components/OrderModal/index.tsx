import { Actions, ModalBody, OrderDatails, Overlay } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../services/formatCurrency";

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, onClose, order }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0
  );

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order?.table}</strong>

          <button onClick={onClose}>
            <img src={closeIcon} alt="close" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "🕑"}
              {order.status === "IN_PRODUCTION" && "👩‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em produção"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDatails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div key={_id} className="item">
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="75"
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-datails">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDatails>

        <Actions>
          <button type="button" className="btn primary">
            <span>👩‍🍳</span>
            Iniciar Produção
          </button>
          <button type="button" className="btn secondary">
            Cancelar Pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
