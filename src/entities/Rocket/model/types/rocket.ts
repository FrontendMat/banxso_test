interface HeatShield {
    material: string;
    size_meters: number;
    temp_degrees: number;
    dev_partner: string;
}

interface PayloadMass {
    kg: number;
    lb: number;
}

interface PayloadVol {
    cubic_meters: number;
    cubic_feet: number;
}

interface PressurizedCapsule {
    payload_volume: PayloadVol;
}

interface Cargo {
    solar_array: number;
    unpressurized_cargo: boolean;
}

interface Trunk {
    trunk_volume: PayloadVol;
    cargo: Cargo;
}

interface Thrust {
    kN: number;
    lbf: number;
}

interface Thruster {
    type: string;
    amount: number;
    pods: number;
    fuel_1: string;
    fuel_2: string;
    isp: number;
    thrust: Thrust;
}

export interface Rocket {
    heat_shield: HeatShield;
    launch_payload_mass: PayloadMass;
    launch_payload_vol: PayloadVol;
    return_payload_mass: PayloadMass;
    return_payload_vol: PayloadVol;
    pressurized_capsule: PressurizedCapsule;
    trunk: Trunk;
    height_w_trunk: {
        meters: number;
        feet: number;
    };
    diameter: {
        meters: number;
        feet: number;
    };
    first_flight: string;
    flickr_images: string[];
    name: string;
    type: string;
    active: boolean;
    crew_capacity: number;
    sidewall_angle_deg: number;
    orbit_duration_yr: number;
    dry_mass_kg: number;
    dry_mass_lb: number;
    thrusters: Thruster[];
    wikipedia: string;
    description: string;
    id: string;
}