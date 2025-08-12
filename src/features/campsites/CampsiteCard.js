import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsiteCard = ({ campsite }) => {
    const { image, name } = campsite; // Destructuring for cleaner code
    //Alternatively, you can use props.campsite directly
    //props.campsite.image and props.campsite.name can be used directly if destructuring is not preferred
    //const { campsite } = props; (Destructuring can be used here if preferred)
    return (
        <Card>
            <CardImg width='100%' src={image} alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
};

export default CampsiteCard;