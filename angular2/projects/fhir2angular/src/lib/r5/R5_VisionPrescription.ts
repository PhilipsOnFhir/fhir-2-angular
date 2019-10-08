import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_VisionPrescription_LensSpecification } from './R5_VisionPrescription_LensSpecification'

export class R5_VisionPrescription      extends R5_DomainResource
{

   static def : string = 'VisionPrescription';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   created : string ;
   patient : R5_Reference ;
   encounter : R5_Reference ;
   dateWritten : string ;
   prescriber : R5_Reference ;
   lensSpecification : R5_VisionPrescription_LensSpecification [];
}
