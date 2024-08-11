import {Rocket} from "../model/types/rocket";

export const transformRocketData = (rocket?: Rocket, isFullInfo?: boolean) => {
    const formatValue = (meters?: number, feet?: number, unitM: string = "M", unitFT: string = "FT") => {
        const m = meters !== undefined ? `${meters} ${unitM}` : "N/A";
        const ft = feet !== undefined ? `${feet} ${unitFT}` : "N/A";
        return `${m} / ${ft}`;
    };

    return [
        {
            name: 'Height',
            value: formatValue(
                rocket?.height_w_trunk?.meters,
                rocket?.height_w_trunk?.feet
            )
        },
        {
            name: 'Diameter',
            value: formatValue(
                rocket?.diameter?.meters,
                rocket?.diameter?.feet
            )
        },
        {
            name: 'SPACECRAFT VOLUME',
            value: formatValue(
                rocket?.pressurized_capsule?.payload_volume?.cubic_meters,
                rocket?.pressurized_capsule?.payload_volume?.cubic_feet,
                "M³", "FT³"
            )
        },
        {
            name: 'TRUNK VOLUME',
            value: formatValue(
                rocket?.trunk?.trunk_volume?.cubic_meters,
                rocket?.trunk?.trunk_volume?.cubic_feet,
                "M³", "FT³"
            )
        },
        {
            name: 'LAUNCH PAYLOAD MASS',
            value: formatValue(
                rocket?.launch_payload_mass?.kg,
                rocket?.launch_payload_mass?.lb,
                "KG", "LBS"
            )
        },
        {
            name: 'RETURN PAYLOAD MASS',
            value: formatValue(
                rocket?.return_payload_mass?.kg,
                rocket?.return_payload_mass?.lb,
                "KG", "LBS"
            )
        },
    ];
}