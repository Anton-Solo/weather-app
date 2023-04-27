import { Card } from "@mui/material";
import { useCustomSelector } from "../../../hooks/useStore";
import { HoursList } from "../../../store/selectors";

export const GrafikHours = () => {
  const hours = useCustomSelector(HoursList);

  const NumberBackground = (number: number): string => {
    const hue = (1 - number / 50) * 240;
    const saturation = "50%";
    const lightness = "50%";
    const gradient: string = `linear-gradient(to bottom, hsl(${hue}, ${saturation}, ${
      parseFloat(lightness) - 20 + Math.abs(number - 50) * 0.4
    }%), hsl(${hue}, ${saturation}, ${
      parseFloat(lightness) + 20 - Math.abs(number - 50) * 0.4
    }%))`;
    return gradient;
  };

  return (
    <Card
      sx={{
        mt: "1rem",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {hours &&
        hours.map((hour) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
            }}
            key={hour.dt}
          >
            <div
              style={{
                width: "25px",
                height: `${hour.main.temp}px`,
                background: NumberBackground(hour.main.temp),
                margin: "2px",
              }}
            />
            <div>
              {String(hour.main.temp)[0] === "-"
                ? Math.floor(hour.main.temp)
                : "+" + Math.floor(hour.main.temp)}
            </div>
          </div>
        ))}
    </Card>
  );
};
