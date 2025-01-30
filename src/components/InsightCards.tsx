import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InsightCards = () => (
  <div className="mb-20">
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="md:basis-1/3">
          <Card className="glass-panel py-2">
            <CardHeader className="py-2">
              <CardTitle className="text-gold text-base">Your profit, unlocked</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <p className="text-gold-light/80 text-xs">
                Discover hidden opportunities and maximize your returns
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/3">
          <Card className="glass-panel py-2">
            <CardHeader className="py-2">
              <CardTitle className="text-gold text-base">Growth and trends</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <p className="text-gold-light/80 text-xs">
                Analyze market patterns and growth trajectories
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/3">
          <Card className="glass-panel py-2">
            <CardHeader className="py-2">
              <CardTitle className="text-gold text-base">Contribution margin</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <p className="text-gold-light/80 text-xs">
                Track and optimize your profit margins
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  </div>
);

export default InsightCards;