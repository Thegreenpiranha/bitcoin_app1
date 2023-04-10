import useFetch from './usefetch';
import BlogList from "./BlogList";

const Bitcoin = () => {
    const  { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="Bitcoin">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} /> }
        </div>
     );
}
 
export default Bitcoin;