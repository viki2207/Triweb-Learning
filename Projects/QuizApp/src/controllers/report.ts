import Report from "../models/report";
import express from "express";
import ProjectError from "../helper/error";
import { Request, Response, NextFunction } from "express";

interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {} | [];
}
const router = express.Router();

const getReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let report;
    if (!!req.params.reportId) {
      const ReportId = req.params.reportId;
      report = await Report.findById(ReportId);
      if (!!report) {
        if (report.userId.toString() !== req.userId) {
          const err = new ProjectError("You are not allowed");
          err.statuscode = 404;
          throw err;
        }
      }
    } else {
      report = await Report.find({ userId: req.userId });
    }

    if (!report) {
      const error = new ProjectError("Report not found");
      error.statuscode = 404;
      throw error;
    }

    const resp: ReturnResponse = {
      status: "success",
      message: "Report!!",
      data: report,
    };
    res.send(resp);
  } catch (error) {
    next(error);
  }
};

export { getReport };
