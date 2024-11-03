import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './CourseGoal.module.css';

// interface CourseGoalProps {
//     title: string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{title: string}>

const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
    return (
        <div className={styles.profile}>
            <h2>{title}</h2>
                {children}
            <button>Delete</button>
        </div>
    )
}

export default CourseGoal;

// export default function CourseGoal({title, children}: CourseGoalProps) {
//     return <div className={styles.profile}>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>Delete</button>
//     </div>
// }