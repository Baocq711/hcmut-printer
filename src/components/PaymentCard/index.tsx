import "./PaymentCard.css"
import {
	CreditCardIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/outline";

function PaymentCard() {
	return (
		<>
			<div className="withdraw">
				<div className="balance-box">
					<div className="text">Số dư </div>
					<div className="value">150.000 VND </div>
				</div>
				<div className="card-box">
					<div className="content-box">
						<div className="text">Trả bằng</div>
						<div className="card-info">
							<div className="left">
								<div className="credit-icon">
									<CreditCardIcon />
								</div>
								<div className="number">Thẻ 907636 *******</div>
							</div>
							<div className="icon">
								<ChevronDownIcon />
							</div>
						</div>

					</div>
				</div>
				<div className="button">
					<div className="text">Nạp tiền</div>
				</div>
			</div>
		</>
	)
}

export default PaymentCard;