from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import os

class SupportVectorMachines(VoiceoverScene):
    def add_subcaption(self, text, **kwargs):
        pass # This disables all subtitles

    def construct(self):
        self.set_speech_service(GTTSService(lang="en", tld="com.au"))
        
        # Title
        title = Text("Support Vector Machines", font_size=48).to_edge(UP)
        with self.voiceover(text="Support Vector Machines, or SVMs, are a powerful machine learning algorithm for classification.") as tracker:
            self.play(Write(title), run_time=tracker.duration)
        self.wait(0.5)
        
        # Section 1: Data points
        axes = Axes(x_range=[-1, 5, 1], y_range=[-1, 5, 1])
        red_dots = VGroup(*[Dot([x, x + 0.5, 0], color=RED) for x in range(3)])
        blue_dots = VGroup(*[Dot([x + 1, 4 - x * 0.5, 0], color=BLUE) for x in range(3)])

        with self.voiceover(text="Imagine we have two groups of data points, represented by red and blue dots.") as tracker:
            self.play(Create(axes), Create(red_dots), Create(blue_dots), run_time=tracker.duration)

        # Section 2: Initial separating line
        line1 = Line([-1, 2, 0], [5, 2, 0], color=YELLOW)
        with self.voiceover(text="Our goal is to find a line that best separates these two groups.") as tracker:
            self.play(Create(line1), run_time=tracker.duration)

        # Section 3: Better separating line
        self.remove(line1)
        line2 = Line([-1, 0.5, 0], [5, 4.5, 0], color=GREEN)
        with self.voiceover(text="This line does a better job of separating them, but how do we quantify 'best'?") as tracker:
            self.play(Create(line2), run_time=tracker.duration)
        
        # Section 4: Margin
        margin_width = 0.5
        margin1 = Line([-1, 0.5 - margin_width, 0], [5, 4.5 - margin_width, 0], color=BLUE, stroke_width=2)
        margin2 = Line([-1, 0.5 + margin_width, 0], [5, 4.5 + margin_width, 0], color=RED, stroke_width=2)


        margin1.set_opacity(0.5)
        margin2.set_opacity(0.5)
        
        with self.voiceover(text="SVMs aim to maximize the margin, which is the distance between the line and the closest points from each group.") as tracker:
            self.play(Create(margin1), Create(margin2), run_time=tracker.duration)

        # Section 5: Support Vectors
        support_vectors = [red_dots[0], blue_dots[2]]
        with self.voiceover(text="These closest points are called support vectors. They define the margin and ultimately, the separating line.") as tracker:
             self.play(*[Indicate(sv, color=YELLOW) for sv in support_vectors], run_time=tracker.duration)

        # Section 6: Optimal hyperplane
        optimal_text = MathTex(r"\text{Optimal Hyperplane}", color=GREEN).to_edge(DOWN)

        with self.voiceover(text="The line that maximizes this margin is known as the optimal hyperplane. And this line defines our support vector machine classifier") as tracker:
            self.play(Write(optimal_text), run_time=tracker.duration)
        
        self.wait(0.5)

        # Summary
        with self.voiceover(text="SVMs are powerful tools used in image recognition, text classification, and many other machine learning applications.") as tracker:
            self.play(FadeOut(axes, red_dots, blue_dots, line2, margin1, margin2, optimal_text), run_time=tracker.duration)
