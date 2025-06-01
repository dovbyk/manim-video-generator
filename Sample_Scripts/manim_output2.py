from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import os

class IntegrationConcept(VoiceoverScene):
    def add_subcaption(self, text, **kwargs):
        pass # This disables all subtitles

    def construct(self):
        self.set_speech_service(GTTSService(lang="en", tld="com.au"))

        # Title
        title = Text("Understanding Integration", font_size=48).to_edge(UP)
        with self.voiceover(text="Let's explore the fundamental concept of integration in calculus.") as tracker:
            self.play(Write(title), run_time=tracker.duration)

        # Axes Setup
        axes = Axes(x_range=[0, 5, 1], y_range=[0, 5, 1], x_length=6, y_length=4).move_to(DOWN * 1.5)
        labels = axes.get_axis_labels(x_label="x", y_label="f(x)")
        with self.voiceover(text="We'll start with a simple coordinate plane. This will allow us to visualise the area under a curve.") as tracker:
            self.play(Create(axes), Write(labels), run_time=tracker.duration)

        # Function Definition
        func = axes.plot(lambda x: 0.5 * x**2, x_range=[0, 4], color=BLUE)
        func_label = MathTex("f(x) = 0.5x^2", color=BLUE).next_to(axes.coords_to_point(3, 4.5), UP)
        with self.voiceover(text="Consider the function f of x equals 0.5 x squared, shown here in blue.") as tracker:
            self.play(Create(func), Write(func_label), run_time=tracker.duration)

        # Riemann Sums
        rect1 = axes.get_riemann_rectangles(func, x_range=[0, 4], dx=1, color=[GREEN, YELLOW], fill_opacity=0.6)
        with self.voiceover(text="Integration is about finding the area under this curve. We can approximate this by summing up a number of rectangles. These rectangles are called Riemann sums.") as tracker:
            self.play(Create(rect1), run_time=tracker.duration)

        #Refine Riemann Sums
        rect2 = axes.get_riemann_rectangles(func, x_range=[0, 4], dx=0.2, color=[GREEN, YELLOW], fill_opacity=0.6)
        with self.voiceover(text="If we use more, thinner rectangles, our approximation becomes much more accurate.") as tracker:
            self.play(Transform(rect1, rect2), run_time=tracker.duration)

        # Definite Integral
        integral = MathTex(r"\int_{0}^{4} 0.5x^2 \,dx", "=", r"\frac{1}{6}x^3", r"\Biggr|_{0}^{4}", "=", r"\frac{32}{3}").move_to(UP)
        with self.voiceover(text="The definite integral calculates the exact area. In this case, the integral from 0 to 4 of 0.5 x squared is 32/3.") as tracker:
            self.play(Write(integral), run_time=tracker.duration)

        # Applications
        with self.voiceover(text="Integration is crucial for calculating areas, volumes, and other quantities in physics and engineering.") as tracker:
            self.play(Indicate(integral), run_time=tracker.duration)

        self.wait(2)
