import "./TwoBox.css"
// import { SidebarButtonDefault } from "../../components/SidebarButtonDefault";
import {
	ArchiveBoxArrowDownIcon, ArchiveBoxIcon
} from "@heroicons/react/24/outline";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

interface TwoBoxProps {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const TwoBox: React.FC<TwoBoxProps> = ({ setOpen, isOpen }) => {
	return (
		<>

			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>

					<Grid size={6}>
						<div className="printed">
							<div className="content-box">
								<div className="top">
									<div className="box-icon">
										<ArchiveBoxArrowDownIcon className="icon" />
									</div>
									<div className="text">
										Số trang đã in
									</div>
								</div>
								<div className="bottom">
									<div className="big-text">
										60
									</div>
									<div className="small-text">
										/Trang
									</div>

								</div>
							</div>
						</div>
					</Grid>
					<Grid size={6}>
						<div className="remaining">
							<div className="content-box">
								<div className="top">
									<div className="box-icon">
										<ArchiveBoxIcon className="icon" />
									</div>
									<div className="text">
										Số trang còn lại
									</div>
								</div>
								<div className="bottom">
									<div className="text-group">
										<div className="big-text">
											40
										</div>
										<div className="small-text">
											/Trang
										</div>
									</div>
									<div className="button cursor-pointer" onClick={() => setOpen(!isOpen)}>
										Mua
									</div>
								</div>
							</div>
						</div>
					</Grid>

				</Grid>
			</Box>



		</>
	)
}

export default TwoBox;