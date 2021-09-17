import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { useTransition } from 'react-spring';
import bestPractise from '../../content/best-practise.json';

const BestPractise = () => {
    const transition = useTransition(bestPractise, {
        from: { opacity: 0, transform: 'translate3d(0,4rem,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-4rem,0)' },
        trail: 100,
        config: { mass: 1, tension: 200, friction: 10, clamp: true },
    });

    return (
        <PageStyles>
            <GridStyles page="best-practise">
                {transition((animation, item) => (
                    <GridItemStyles style={animation} key={item.title}>
                        <dt>{item.title}</dt>
                        <div>
                            {item.value.map((val) => (
                                <dd key={val} className="paragraphs">
                                    {val}
                                </dd>
                            ))}
                        </div>
                    </GridItemStyles>
                ))}
            </GridStyles>
        </PageStyles>
    );
};

export default BestPractise;
