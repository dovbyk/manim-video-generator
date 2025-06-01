from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import os

class LinearRegression(VoiceoverScene):
    def add_subcaption(self, text, **kwargs):
        pass # This disables all subtitles

    def construct(self):
        self.set_speech_service(GTTSService(lang="en", tld="com.au"))
        
        # Title
        title = Text("Linear Regression", font_size=48).to_edge(UP)
        with self.voiceover(text="Let's explore the concept of Linear Regression, a fundamental machine learning technique.") as tracker:
            self.play(Write(title), run_time=tracker.duration)
        self.wait(0.5)
        
        # Axes setup
        axes = Axes(x_range=[0, 5, 1], y_range=[0, 5, 1], axis_config={"include_numbers": True})
        #axes.add_coordinate_labels()
        with self.voiceover(text="First, let's create our coordinate system. The x-axis represents the independent variable, and the y-axis represents the dependent variable.") as tracker:
            self.play(Create(axes), run_time=tracker.duration)
        self.wait(0.2)

        # Data points
        points = [Dot(axes.coords_to_point(1, 1.5), color=BLUE), Dot(axes.coords_to_point(2, 2.5), color=BLUE), Dot(axes.coords_to_point(3, 2), color=BLUE), Dot(axes.coords_to_point(4, 3), color=BLUE)]
        with self.voiceover(text="Now, let's add some data points. These represent our observations.") as tracker:
            self.play(*[Create(p) for p in points], run_time=tracker.duration)
        self.wait(0.2)

        # Explain the goal
        with self.voiceover(text="Linear Regression aims to find the best-fitting line through these points.") as tracker:
            pass
        self.wait(0.2)

        # Initial line
        line = Line(axes.coords_to_point(0, 0), axes.coords_to_point(5, 3.5), color=RED)
        with self.voiceover(text="Let's draw an initial line. This is just a guess to start with.") as tracker:
            self.play(Create(line), run_time=tracker.duration)
        self.wait(0.2)
        
        # Demonstrate moving the line
        new_line = Line(axes.coords_to_point(0, 0.5), axes.coords_to_point(5, 3), color=GREEN)
        with self.voiceover(text="We want to find a better line, one that minimizes the distance between the line and the points. We adjust its position.") as tracker:
            self.play(Transform(line, new_line), run_time=tracker.duration)
        self.wait(0.2)
        
        # Regression line (using a calculated slope and intercept to get better fit)
        best_fit_line = Line(axes.coords_to_point(0, 0.7), axes.coords_to_point(5, 3.2), color=YELLOW)
        with self.voiceover(text="Through an optimization algorithm, we find the best fit. This line minimizes the sum of squared distances between points and the line.") as tracker:
            self.play(Transform(line, best_fit_line), run_time=tracker.duration)
        self.wait(0.2)

        # Show distance
        distances = [
            Line(points[0].get_center(), axes.coords_to_point(1, 1.1), color=YELLOW, stroke_width=2),
            Line(points[1].get_center(), axes.coords_to_point(2, 1.9), color=YELLOW, stroke_width=2),
            Line(points[2].get_center(), axes.coords_to_point(3, 2.5), color=YELLOW, stroke_width=2),
            Line(points[3].get_center(), axes.coords_to_point(4, 3.1), color=YELLOW, stroke_width=2)
        ]

        with self.voiceover(text="These vertical lines represent the difference between each point and the predicted value on the line.") as tracker:
            self.play(*[Create(d) for d in distances], run_time=tracker.duration)
        self.wait(0.2)

        # Equation
        equation = MathTex("y = mx + b", color=WHITE).to_edge(DOWN)
        with self.voiceover(text="This best-fitting line is represented by the equation y equals mx plus b, where m is the slope and b is the y-intercept.") as tracker:
            self.play(Write(equation), run_time=tracker.duration)
        self.wait(0.2)

        # Show slope
        slope_triangle = VGroup(
            Line(axes.coords_to_point(1, 1.1), axes.coords_to_point(2, 1.1), color=WHITE, stroke_width=2),
            Line(axes.coords_to_point(2, 1.1), axes.coords_to_point(2, 1.6), color=WHITE, stroke_width=2),
            Line(axes.coords_to_point(1, 1.1), axes.coords_to_point(2, 1.6), color=WHITE, stroke_width=2)
        )
        with self.voiceover(text="The slope, m, represents the rate of change. How much y changes for each unit increase in x.") as tracker:
            self.play(Create(slope_triangle), run_time=tracker.duration)
        self.wait(0.2)

        # Show y-intercept
        y_intercept_brace = Brace(Line(axes.coords_to_point(0,0), axes.coords_to_point(0, 0.7)), direction=LEFT, color=WHITE)
        y_intercept_text = Tex("y-intercept", color=WHITE).next_to(y_intercept_brace, LEFT)
        with self.voiceover(text="The y-intercept, b, represents the value of y when x is zero.") as tracker:
            self.play(Create(y_intercept_brace), Write(y_intercept_text), run_time=tracker.duration)
        self.wait(0.2)

        # Applications
        with self.voiceover(text="Linear Regression has wide applications. For example, it is used to predict house prices based on size and other factors.") as tracker:
            pass
        self.wait(0.2)

        # Remove distances
        with self.voiceover(text="Now, Lets clean up our visualization and move towards final result") as tracker:
            self.play(*[Uncreate(d) for d in distances], run_time=tracker.duration * 0.3)
            self.play(Uncreate(slope_triangle), run_time=tracker.duration * 0.3)
            self.play(Uncreate(y_intercept_brace), Unwrite(y_intercept_text), run_time=tracker.duration * 0.3)
        self.wait(0.2)

        # Final summary
        with self.voiceover(text="Linear Regression is a simple yet powerful tool for understanding the relationship between variables and making predictions. It helps us identify trends and patterns within our data.") as tracker:
            self.play(Unwrite(equation), run_time=tracker.duration)
        self.wait(1)
