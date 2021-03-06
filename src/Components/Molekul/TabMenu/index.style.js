import styled from "styled-components";

const Style = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .tab-top {
        width: 100%;
        display: flex;
        &-menu {
            display: flex;
            width: 100%;
            flex-direction: row;
            border: none;
        }
        &-title {
            display: inline-flex;
            margin-right: 10px;
            padding: 10px 12px;
            transition: 0.3 all ease-in;
            color: ${(props) =>
                props.color.text ? props.color.text : "#b0b0b0"};
            background: #fff;
            font-weight: 500;
            border-bottom: 1px solid #fff;
            cursor: pointer;
            &:hover,
            &.active {
                color: ${(props) =>
                    props.color.activeColor
                        ? props.color.activeColor
                        : "#25aae2"};
                border-bottom: 2px solid
                    ${(props) =>
                        props.color.activeColor
                            ? props.color.activeColor
                            : "#25aae2"};
                transition: 0.3 all ease-in;
            }
            &.radius {
                padding: 10px 25px;
                background: #f2f2f2;
                color: #989898;
                border-radius: 45px;
                border: 0;
                &.active,
                &:hover {
                    transition: 0.3 all ease-in;
                    background: #ffa300;
                    color: #fff;
                    border: 0;
                }
            }
            @media (max-width: 422px) {
                padding: 10px 10px !important;
            }
        }
    }
    .tab-content {
        padding: 20px 0;
    }
    .tab-top {
        &-menu {
            width: ${(props) => props.mergesTab && "max-content"};
        }
        &-title {
            margin: ${(props) => props.mergesTab && "0"};
            border: ${(props) =>
                props.mergesTab &&
                `1px solid ${props.color.text ? props.color.text : "#ddd"}`};

            &:hover {
                background: ${(props) =>
                    props.mergesTab &&
                    `${
                        props.color.activeBackground
                            ? props.color.activeBackground
                            : "#25aae2"
                    }`};
                color: ${(props) =>
                    props.mergesTab &&
                    `${
                        props.color.activeColor
                            ? props.color.activeColor
                            : "#fff"
                    }`};
                border-bottom: ${(props) =>
                    props.mergesTab &&
                    `1px solid ${
                        props.color.text ? props.color.text : "#ddd"
                    }`};
            }
            &.active {
                background: ${(props) =>
                    props.mergesTab &&
                    `${
                        props.color.activeBackground
                            ? props.color.activeBackground
                            : "#25aae2"
                    }`};
                color: ${(props) =>
                    props.mergesTab &&
                    `${
                        props.color.activeColor
                            ? props.color.activeColor
                            : "#fff"
                    }`};
                border: ${(props) => props.mergesTab && "none"};
            }
        }
    }
`;

export default Style;
