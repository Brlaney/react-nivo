import { ResponsiveNetworkCanvas } from '@nivo/network'
import { data } from '../lib/data/network'


const NetworkGraph = ({ data }) => (
    <ResponsiveNetworkCanvas
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance="distance"
        repulsivity={4}
        iterations={60}
        nodeColor={function(e){return e.color}}
        nodeBorderWidth={1}
        nodeBorderColor={{ theme: 'background' }}
    />
)

export default NetworkGraph;
