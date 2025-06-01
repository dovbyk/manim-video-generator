from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import os

class LogisticRegressionExplanation(VoiceoverScene):
    def add_subcaption(self, text, **kwargs):
        pass # This disables all subtitles

    def construct(self):
        self.set_speech_service(GTTSService(lang="en", tld="com.au"))
        
        # Title
        title = Text("Logistic Regression", font_size=48).to_edge(UP)
        with self.voiceover(text="Let's explore Logistic Regression, a vital tool in machine learning for classification tasks.") as tracker:
            self.play(Write(title), run_time=tracker.duration)
        self.wait(0.5)

        # Setup: Axes
        axes = Axes(
            x_range=[0, 10, 1],
            y_range=[0, 1.1, 0.1],
            x_length=7,
            y_length=5
        ).move_to(DOWN * 1.5)
        x_label = axes.get_x_axis_label("X", edge=RIGHT, direction=DR, buff=0.5)
        y_label = axes.get_y_axis_label("Probability", edge=UP, direction=UR, buff=0)
        with self.voiceover(text="We'll start with a simple graph, where the x-axis represents our input feature and the y-axis represents the probability of belonging to a certain class.") as tracker:
            self.play(Create(axes), Write(x_label), Write(y_label), run_time=tracker.duration)

        # Setup: Data Points
        data_points = [Dot(axes.coords_to_point(x, y), color=BLUE) for x, y in [(1, 0.1), (2, 0.2), (3, 0.3), (6, 0.7), (7, 0.8), (8, 0.9)]]
        with self.voiceover(text="Imagine we have some data points. Each point represents an observation with a corresponding probability.") as tracker:
            self.play(*[Create(dot) for dot in data_points], run_time=tracker.duration)

        # Introduce Sigmoid Function
        sigmoid_function = axes.plot(lambda x: 1 / (1 + np.exp(-x + 5)), x_range=[0, 10], color=GREEN)
        with self.voiceover(text="Logistic Regression uses the sigmoid function to model this probability. It squashes values between 0 and 1.") as tracker:
            self.play(Create(sigmoid_function), run_time=tracker.duration)

        # Explain the threshold
        threshold_line = Line(start=axes.coords_to_point(0, 0.5), end=axes.coords_to_point(10, 0.5), color=YELLOW, stroke_width=2)
        with self.voiceover(text="We set a threshold, often at 0.5. If the predicted probability is above this threshold, we classify the observation into one class. Otherwise, it's classified into the other.") as tracker:
            self.play(Create(threshold_line), run_time=tracker.duration)

        # Show classification based on threshold
        above_points = [dot for dot in data_points if dot.get_center()[1] > axes.coords_to_point(0,0.5)[1]]
        below_points = [dot for dot in data_points if dot.get_center()[1] <= axes.coords_to_point(0,0.5)[1]]

        with self.voiceover(text="Points above the yellow line are classified into one group, and points below the yellow line are classified into another group.") as tracker:
            self.play(*[dot.animate.set_color(GREEN) for dot in above_points],  *[dot.animate.set_color(RED) for dot in below_points], run_time=tracker.duration)

        # Example 1: Predict Class
        test_x = 4
        test_point = Dot(axes.coords_to_point(test_x, 1 / (1 + np.exp(-test_x + 5))), color=WHITE)
        vertical_line = DashedLine(start=axes.coords_to_point(test_x, 0), end=axes.coords_to_point(test_x, 1 / (1 + np.exp(-test_x + 5))), color=WHITE)

        with self.voiceover(text="Let's say we have a new data point where the feature value is 4. We find its corresponding probability on the curve.") as tracker:
            self.play(Create(vertical_line), Create(test_point), run_time=tracker.duration)

        with self.voiceover(text="Since it falls below the threshold, we classify this new point into the red class.") as tracker:
            self.play(test_point.animate.set_color(RED), run_time=tracker.duration)

        # Example 2: Predict Class
        test_x_2 = 7.5
        test_point_2 = Dot(axes.coords_to_point(test_x_2, 1 / (1 + np.exp(-test_x_2 + 5))), color=WHITE)
        vertical_line_2 = DashedLine(start=axes.coords_to_point(test_x_2, 0), end=axes.coords_to_point(test_x_2, 1 / (1 + np.exp(-test_x_2 + 5))), color=WHITE)

        with self.voiceover(text="Now consider another new data point where the feature value is 7.5. Again, we find its corresponding probability on the curve.") as tracker:
            self.play(ReplacementTransform(vertical_line, vertical_line_2), ReplacementTransform(test_point, test_point_2), run_time=tracker.duration)

        with self.voiceover(text="As it falls above the threshold, we classify this new point into the green class.") as tracker:
            self.play(test_point_2.animate.set_color(GREEN), run_time=tracker.duration)

        # Brief cleanup before conclusion
        self.play(FadeOut(vertical_line_2), FadeOut(test_point_2))

        # Conclusion
        with self.voiceover(text="Logistic Regression is widely used in applications such as spam detection, medical diagnosis, and fraud detection, providing a simple yet powerful method for binary classification.") as tracker:
            self.play(FadeOut(axes, sigmoid_function, threshold_line, *data_points, x_label, y_label), run_time=tracker.duration)
        
        self.wait(1)
