import SmallTitle from '../Global/SmallTitle';
import BigTitle from '../Global/BigTitle';
import '../Blog/Blog.css';
import BlogCard from './BlogCard';
import blog1 from '../Blog/blog1.jpg';
import blog2 from '../Blog/blog2.jpg';
import blog3 from '../Blog/blog3.jpg';


function Blog() {

    const CalendarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-blog-post" fill="#D48521" width="15px" height="15px" >
            <path d="M14.211 1.285h-1.615V0h-.568v1.285h-1.469V0h-.568v1.285H4.91V0h-.568v1.285h-1.47V0h-.568v1.285H.696a.69.69 0 0 0-.643.429A.7.7 0 0 0 0 1.98v11.89a.699.699 0 0 0 .696.698H14.21a.694.694 0 0 0 .696-.698V1.98a.698.698 0 0 0-.696-.695Zm.137 12.585a.14.14 0 0 1-.137.137H.696a.138.138 0 0 1-.137-.137V4.574h13.79v9.296Zm0-9.87H.558V1.98a.136.136 0 0 1 .138-.134h1.608v1.05h.569v-1.05h1.469v1.05h.568v-1.05h5.08v1.05h.57v-1.05h1.468v1.05h.568v-1.05h1.615a.136.136 0 0 1 .137.134V4Z" />
            <path d="M12.604 6.9h-2.03v.571h2.03v-.572ZM8.64 6.874H6.61v.572h2.03v-.572Zm-5.01-.79a1.075 1.075 0 0 1 .995.668 1.087 1.087 0 0 1-.234 1.179 1.075 1.075 0 0 1-1.839-.765A1.085 1.085 0 0 1 3.63 6.084Zm0-.53a1.601 1.601 0 0 0-1.484.995 1.619 1.619 0 0 0 .349 1.756 1.604 1.604 0 0 0 1.749.35 1.607 1.607 0 0 0 .991-1.49c0-.427-.17-.837-.47-1.14a1.602 1.602 0 0 0-1.135-.471Z" />
            <path d="M4.06 6.876h-.847v.571h.847v-.571Zm8.544 1.894h-2.03v.572h2.03v-.571ZM8.64 8.746H6.61v.571h2.03v-.571Zm3.964 1.895h-2.03v.572h2.03v-.572Zm-3.964-.025H6.61v.572h2.03v-.572Zm-4.006.029h-2.03v.571h2.03v-.571Z" />
        </svg>
    )

    const CommentIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-blog-post" fill="#D48521" width="auto" height="auto" >
            <path fill-rule="evenodd" d="M4.052 5.758C1.683 6.354 0 8.16 0 10.25a4.135 4.135 0 0 0 1.08 2.745l-.374 2.429a.5.5 0 0 0 .82.455l1.658-1.421a6.808 6.808 0 0 0 2.566.492 6.238 6.238 0 0 0 4.64-1.922.499.499 0 0 0 .092-.145c.502.078 1.01.117 1.518.117a9.484 9.484 0 0 0 3.705-.737l2.469 2.117a.5.5 0 0 0 .82-.456l-.55-3.57A5.712 5.712 0 0 0 20 6.5C20 2.946 16.442 0 12 0 7.871 0 4.506 2.546 4.052 5.758Zm-.043 1.05c-1.743.538-3.01 1.86-3.01 3.442.016.843.364 1.646.969 2.233a.5.5 0 0 1 .136.425L1.9 14.242l.872-.748a.5.5 0 0 1 .538-.072 5.746 5.746 0 0 0 2.44.528 5.36 5.36 0 0 0 3.621-1.31c-3.022-.857-5.205-3.147-5.361-5.832Zm12.106 4.49a.5.5 0 0 0-.538-.073A8.428 8.428 0 0 1 12 12c-3.837 0-7-2.43-7-5.5C5 3.432 8.163 1 12 1c3.836 0 7 2.431 7 5.5a4.772 4.772 0 0 1-1.445 3.34.5.5 0 0 0-.136.425l.38 2.477-1.684-1.444Z" /></svg>
    )

    return (
        <div className="blog-container">
            <div className="blog-content" >
                <SmallTitle title="Get Every Single Update" fontSz="14px" justifyContent="center" />
                <BigTitle title="Read Some Latest Blog & News" fontSz="40px" margin="0px 0px 57px 0px" textAlign="center" />
                <div className="blog-posts">
                    <span><BlogCard background={blog1} mainText="SWR React Hooks With Next Increm Ental Static Regeneration" iconCalendar={<CalendarIcon
                    />} textCalendar="March 26, 2022" iconComment={<CommentIcon />} textComment="Comments (0)" /></span>
                    <span><BlogCard background={blog2} mainText="Decisions For Building Flexible Components DevTools Browser" iconCalendar={<CalendarIcon
                    />} textCalendar="March 26, 2022" iconComment={<CommentIcon />} textComment="Comments (0)" /></span>
                    <span><BlogCard background={blog3} mainText="SWR React Hooks With Next Increm Ental Static Regeneration" iconCalendar={<CalendarIcon
                    />} textCalendar="March 26, 2022" iconComment={<CommentIcon />} textComment="Comments (0)" /></span>


                </div>



            </div>

        </div>

    );


}

export default Blog;