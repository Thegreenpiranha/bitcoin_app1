import useFetch from './usefetch';
import BlogList from "./BlogList";

const BitcoinAdv = () => {
    const  { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="BitcoinAdv">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} /> }
        </div>
     );
}
 
export default BitcoinAdv;