/**
 * HOC that passes the given props
 * to a component.
 * 
 * @param customProps The props that should be passed to the component
 * @param Component   The component which will receive the props
 */
export const withProps = (customProps: Object) => Component => {
  const WrappedComponent = props =>
    <Component {...props} {...customProps} />
    
  return WrappedComponent
}