import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
    const { id, image, name } = campsite; // Destructuring for cleaner code
    //Alternatively, you can use props.campsite directly
    //props.campsite.image and props.campsite.name can be used directly if destructuring is not preferred
    //const { campsite } = props; (Destructuring can be used here if preferred)
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
};

export default CampsiteCard;