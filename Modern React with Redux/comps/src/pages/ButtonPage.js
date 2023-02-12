import {GoBell} from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage () {
    return <div>
        <div>
            <Button primary rounded>
                <GoBell/>
                Primary
            </Button>
        </div>
        <div>
            <Button secondary outline>Secondary</Button>
        </div>
        <div>
            <Button success rounded outline>Success</Button>
        </div>
        <div>
            <Button warning outline>Warning</Button>
        </div>
        <div>
            <Button danger>Danger</Button>
        </div>
    </div>
}

export default ButtonPage;