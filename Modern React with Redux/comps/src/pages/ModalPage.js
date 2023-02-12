import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClick =() => {
        setShowModal(true);
    };

    const handleClose =() => {
        setShowModal(false);
    }
    const actionBar = <div>
        <Button onClick={handleClose} primary>Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Some big thing that has details that does things.</p>
    </Modal>;

    return <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et blandit augue. Fusce efficitur consectetur tortor, sit amet rutrum lorem placerat eu. Nam egestas venenatis maximus. Donec cursus ultricies blandit. Aenean at massa lacus. Nulla dapibus tellus id purus aliquam posuere. Donec hendrerit, urna eu tincidunt fermentum, neque tortor fringilla lectus, eu porttitor felis magna sed diam. Suspendisse diam orci, gravida in tellus et, placerat mollis nulla. Vestibulum in maximus justo. Proin tristique sem vitae sapien maximus, id mollis nunc lobortis. Fusce semper urna eget lorem viverra egestas. Nam a arcu aliquam, pharetra felis interdum, venenatis ante. Pellentesque in congue ipsum. Curabitur libero risus, blandit ac quam id, pellentesque cursus sapien. Nunc luctus semper tortor, non tempus felis volutpat vel. Fusce fermentum laoreet ligula nec semper.
        </p>
        <p>
        Sed eu nisi quam. Donec vel volutpat augue. Proin at placerat magna, facilisis convallis enim. Morbi nunc erat, ultricies quis dui ac, iaculis tempor ipsum. Morbi tempus neque nisi. Vestibulum feugiat ullamcorper nisl, a blandit ex convallis id. Sed cursus risus dolor. Mauris posuere velit justo, id fermentum diam imperdiet et. Pellentesque vehicula ligula vel euismod convallis. Curabitur sit amet urna sapien. Suspendisse porttitor quam dui, eget ultrices mi ultrices vitae. Fusce quis varius neque, in ultricies massa. Quisque consequat risus vitae nisi dignissim elementum et volutpat nisl. Integer nec dignissim orci.
        </p>
        <p>
        Curabitur tincidunt magna nulla, nec commodo nunc semper a. In pharetra eros sollicitudin purus dignissim, a lobortis ex hendrerit. Maecenas elit nisl, vulputate ut velit eu, elementum feugiat ante. Sed eu magna eget tortor laoreet porta eget ac mi. Morbi feugiat sagittis mi, eu sagittis urna placerat facilisis. Suspendisse ut cursus arcu. Etiam aliquet sed libero ut venenatis. Sed cursus viverra purus, id dictum ante accumsan sit amet. Suspendisse in lorem sed sapien finibus molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam et ipsum metus. Phasellus id porta sem.
        </p>
        <p>
        Proin eget nibh augue. Nunc tempor ornare nunc, non pretium est. Praesent ullamcorper maximus risus eu interdum. Nam non sollicitudin mi. Nunc id ullamcorper dolor, et commodo lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer non metus a neque ornare sollicitudin. Mauris leo lorem, dignissim vel est vel, aliquet porttitor nisl. Cras vel justo libero. Suspendisse potenti. Donec interdum arcu lacinia augue congue, a varius lorem ornare. Sed in luctus arcu. Quisque a urna viverra, pharetra orci vel, bibendum urna.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et blandit augue. Fusce efficitur consectetur tortor, sit amet rutrum lorem placerat eu. Nam egestas venenatis maximus. Donec cursus ultricies blandit. Aenean at massa lacus. Nulla dapibus tellus id purus aliquam posuere. Donec hendrerit, urna eu tincidunt fermentum, neque tortor fringilla lectus, eu porttitor felis magna sed diam. Suspendisse diam orci, gravida in tellus et, placerat mollis nulla. Vestibulum in maximus justo. Proin tristique sem vitae sapien maximus, id mollis nunc lobortis. Fusce semper urna eget lorem viverra egestas. Nam a arcu aliquam, pharetra felis interdum, venenatis ante. Pellentesque in congue ipsum. Curabitur libero risus, blandit ac quam id, pellentesque cursus sapien. Nunc luctus semper tortor, non tempus felis volutpat vel. Fusce fermentum laoreet ligula nec semper.
        </p>
        <p>
        Sed eu nisi quam. Donec vel volutpat augue. Proin at placerat magna, facilisis convallis enim. Morbi nunc erat, ultricies quis dui ac, iaculis tempor ipsum. Morbi tempus neque nisi. Vestibulum feugiat ullamcorper nisl, a blandit ex convallis id. Sed cursus risus dolor. Mauris posuere velit justo, id fermentum diam imperdiet et. Pellentesque vehicula ligula vel euismod convallis. Curabitur sit amet urna sapien. Suspendisse porttitor quam dui, eget ultrices mi ultrices vitae. Fusce quis varius neque, in ultricies massa. Quisque consequat risus vitae nisi dignissim elementum et volutpat nisl. Integer nec dignissim orci.
        </p>
        <p>
        Curabitur tincidunt magna nulla, nec commodo nunc semper a. In pharetra eros sollicitudin purus dignissim, a lobortis ex hendrerit. Maecenas elit nisl, vulputate ut velit eu, elementum feugiat ante. Sed eu magna eget tortor laoreet porta eget ac mi. Morbi feugiat sagittis mi, eu sagittis urna placerat facilisis. Suspendisse ut cursus arcu. Etiam aliquet sed libero ut venenatis. Sed cursus viverra purus, id dictum ante accumsan sit amet. Suspendisse in lorem sed sapien finibus molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam et ipsum metus. Phasellus id porta sem.
        </p>
        <p>
        Proin eget nibh augue. Nunc tempor ornare nunc, non pretium est. Praesent ullamcorper maximus risus eu interdum. Nam non sollicitudin mi. Nunc id ullamcorper dolor, et commodo lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer non metus a neque ornare sollicitudin. Mauris leo lorem, dignissim vel est vel, aliquet porttitor nisl. Cras vel justo libero. Suspendisse potenti. Donec interdum arcu lacinia augue congue, a varius lorem ornare. Sed in luctus arcu. Quisque a urna viverra, pharetra orci vel, bibendum urna.
        </p>
    </div>
};

export default ModalPage;