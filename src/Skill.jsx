import React, { useEffect, useRef } from 'react'


export default function Skill(props) {
    const componentRef = useRef(null);

    useEffect(() => {
        // Callback function when the element is visible
        function onVisible(entries, observer) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Element is visible on the screen
              const vis = entry.target.childNodes[1].childNodes[0];
            vis.classList.add('-translate-x-full');
            vis.classList.add('translate-x-0');
              // Call your function or trigger any desired action
            }
          });
        }
    
        // Callback function when the element is not visible
        function onHidden(entries, observer) {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              // Element is not visible on the screen
              const vis = entry.target.childNodes[1].childNodes[0];
              vis.classList.remove('-translate-x-full');
              vis.classList.remove('translate-x-0');
              // Call your function or trigger any desired action
            }
          });
        }
    
        // Options for the Intersection Observer
        const options = {
          root: null, // Use the viewport as the root
          rootMargin: '0px', // No margin
          threshold: 0, // Trigger the callback as soon as any part of the element is visible
        };
    
        // Create the Intersection Observer instances
        const visibleObserver = new IntersectionObserver(onVisible, options);
        const hiddenObserver = new IntersectionObserver(onHidden, options);

    
        // Observe the elements
        visibleObserver.observe(componentRef.current);
        hiddenObserver.observe(componentRef.current);
    
        // Clean up the observers
        return () => {
          visibleObserver.disconnect();
          hiddenObserver.disconnect();
        };
      }, []);
    return (
        <div id='skill' ref={componentRef} className="flex my-2 w-full">
            <p className="flex sm:w-2/12 w-4/12 items-center sm:text-2xl text-white font-medium sm:justify-end sm:px-10 px-5">{props.skill}</p>
            <div className="flex h-10 w-8/12 items-center transform transition duration-300 translate-x-6">
                <div id='vis' className={`h-5 w-[${props.percentage}%] bg-gradient-to-r from-gray-800 to-red-800 rounded  transition-transform duration-700 -translate-x-full`}>
                </div>
            </div>
        </div>
    )
}