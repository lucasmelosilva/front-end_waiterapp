import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 24px;
    }

    button {
      border: none;
      background: transparent;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
  }
`;

export const OrderDatails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;
    min-height: 120px;
    max-height: 150px;
    overflow-y: auto;
  }

  .item {
    display: flex;

    & + .item {
      margin-top: 16px;
    }

    img {
      border-radius: 6px;
    }

    .quantity {
      font-size: 14px;
      color: #666;
      margin-left: 12px;
      display: block;
      min-width: 20px;
    }

    .product-datails {
      margin-left: 4px;
      strong {
        display: block;
        margin-bottom: 4px;
      }

      span {
        font-size: 14px;
      }
    }
  }

  .total {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 14px;
      font-waight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .btn {
    padding: 12px 24px;
    justify-content: center;
    gap: 16px;
    align-items: center;
    display: flex;
  }

  .primary {
    background: #333;
    border-radius: 48px;
    border: 0;
    color: #fff;
  }

  .secondary {
    border: 0;
    color: #d73035;
    font-weight: bold;
    background: transparent;
  }
`;
