import Navigo from '../node_modules/navigo';
// import Navigo from 'navigo';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Student from './pages/Student';
import StudentAdd from './pages/StudentAdd';
import StudentDetail from "./pages/StudentDetail";
import Product from './pages/Product';
import ProductAdd from './pages/ProductAdd';
import ProductDetail from './pages/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

// Khởi tạo đối tượng router
const router = new Navigo('/', {linksSelector: 'a'});

const render = async (content,id) => {
    // content se la toan bo component
    // can them tham so vao ham nay de trueyn id cho nhung phan detail
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    if (content.afterRender){
        content.afterRender();
    }
};
// sau kho content xda render xong thi afterRender moi dc chay
router.on({
    '/': () => render(Home),
    '/about': () => render(About),
    '/news': () => render(News),
    '/students': () => render(Student),
    '/students/add':()=>render(StudentAdd),
    '/students/detail/:id':(data)=> render(StudentDetail,data.data.id),
    '/products': () => render(Product),
    '/products/add':()=>render(ProductAdd),
    '/products/detail/:id':(data)=>render(ProductDetail,data.data.id),
 
});
router.resolve();

// render();

// --------------------------------


// arrow function: const ten_ham = () => {};
const arrowRender = () => {
    document.querySelector('#header').innerHTML = '<div>Header</div>';
    document.querySelector('#content').innerHTML = '<div>Content</div>';
    document.querySelector('#footer').innerHTML = '<div>Footer</div>';
};

